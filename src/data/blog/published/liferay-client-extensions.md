---
title: What I learned publishing my first npm package
description: publishing liferay-client-extensions to reduce the boilerplate and drive configuration
published: 2026-10-13
authors:
  - Hao Duong
---

### Introduction

I recently published my first public npm package: [liferay-client-extensions](https://www.npmjs.com/package/liferay-client-extensions). It lets the folder structure of your app drive the configuration of your Liferay client extensions.

### Why I built it

In our codebase, and in plenty of others I've seen, everyone had their own way of wiring up widgets, but underneath it was always the same core components: a folder, a custom element, and a pile of repetitive boilerplate configuration to describe it.

That configuration is a `client-extension.yaml` file. It's how Liferay learns about your widgets: each entry registers a custom element with the portal, so it can be found and placed on a page. Here's what two hand-written widgets look like:

```yaml
assemble:
  - from: build/static
    into: static

home:
  name: Home
  type: customElement
  htmlElementName: home
  urls:
    - index.js
  cssURLs:
    - index.css
  instanceable: false
  portletCategoryName: category.client-extensions
  useESM: true

booking-record:
  name: Booking Record
  type: customElement
  htmlElementName: booking-record
  urls:
    - index.js
  cssURLs:
    - index.css
  instanceable: false
  portletCategoryName: category.client-extensions
  useESM: true
```

Every new widget means another block like this, copied, pasted and renamed, and kept in sync with the folder it describes. Multiply that across environments and teams, and it's easy to see where mistakes creep in.

But look closely and you'll notice it's nothing more than build configuration. It describes what your build produces (a name, an element tag, the bundles to load) for every widget in your app. All of that information already exists in your source, in the folder structure and the elements you export. That's exactly why it doesn't need to be written by hand: your build tool, like Vite, can generate it straight from the code.

Borrowing from the file-based routing of TanStack Router and Next.js, that's the idea behind the package. Create a folder, export an element, and the config is generated for you.

### How it works

Add the Vite plugin:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import { customElements } from 'liferay-client-extensions/vite'

export default defineConfig({
  plugins: [customElements()],
})
```

Then create an element:

```tsx
// src/app/booking/record/index.tsx
import { createElement } from 'liferay-client-extensions'

const Record = () => <h1>Booking {booking.useSearch().id}</h1>

export const booking = createElement('booking-record', {
  component: Record,
  validateSearch: (raw) => ({ id: raw.id ?? '' }),
})
```

Run `vite` and `booking/record` becomes `<booking-record>`, with `client-extension.yaml` written for you. Add a folder and it appears. Delete it and it's gone.

### What it taught me

**Library tooling has caught up.** I used [tsdown](https://tsdown.dev), a build tool made specifically for libraries. I've fought the ESM/CJS export mess in our internal projects, so having exports, dual formats and types distilled down so I could focus on the library itself felt like a godsend.

**Documentation is a form of care.** In our push for velocity we've lost something: a care for the person (or AI) who will one day have to use our code. Publishing publicly made me think much more deliberately about how people will use the package, what needs to be exposed, what doesn't and how to express all that. Writing the README for strangers was a true test of it all, and it certainly made me appreciate all the effort behind the documentation I've read to date.

**Keep the scope small.** A small package with deliberate tests is easier to trust, and many of those make the application as a whole more robust.

### Try it

```sh
pnpm add liferay-client-extensions
```

- [npm](https://www.npmjs.com/package/liferay-client-extensions)
- [GitHub](https://github.com/duonghao/liferay-client-extensions)

It's v0.1.0, so feedback and issues are very welcome.
