# ADR 1: Choosing static website stack

These documents have names that are short noun phrases. For example, "ADR 1: Deployment on Ruby on Rails 3.0.10" or "ADR 9: LDAP for Multitenant Integration"

# Context

We are building the first company website for Lionheart Pacific. We want to choose a stack that we won't regret. We want to launch the site quickly, we want it to be easy to make future changes, and we know the website will be static.

We evaluated using Astro, React, and Tailwind by creating a small sample project and implementing a small, scaled down version of our design. It worked well without issue. We discussed Next.js but did not evaluate it because we think it's too complex given that we don't need a server side component.

# Decision

We will use Astro, React, and Tailwind to build the website.

# Status

Accepted!

# Consequences

We already know React and Tailwind and the learning curve of Astro seems small so we believe we will find it to be easy.
