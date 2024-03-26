## Built using the Next.js

The Quesadilla Calling

Built with React framework Next.js which provides you with building blocks to create web applications. By framework, that means Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.

Able to build navigation pages with layout components that allow partial rendering. Whatever is added to the root layout components will be shared across all pages in the application.

Instead of using the traditional <a> tags I was able to optimize navigation using the <link> component allowing client-side navigation with JS.

Different behavior between static and dynamic routes:

Static Routes: prefetch defaults to true. The entire route is prefetched and cached.

Dynamic Routes: Prefetch default to automatic. only the shared layout, down the rendered "tree: of components and cached for 30s. This reduces cost of fetching an entir dynamic route, and it means you can show an instant loading state for better visual feedback to the user.