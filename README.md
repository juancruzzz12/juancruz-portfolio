# Juan Cruz — Personal Website

Minimal personal website built with Next.js, TypeScript, and Tailwind CSS. Inspired by the clean, text-first feel of Laura Chen's portfolio, with original content and markup.

## Run it on your computer

1. Install Node.js LTS (version 22 is a good choice).
2. Open this folder in VS Code.
3. Open Terminal > New Terminal.
4. Run `npm install`.
5. Run `npm run dev`.
6. Visit http://localhost:3000.

Stop the server with Ctrl+C.

## Update your information

Open `data/portfolio.ts` and edit the profile, work, projects, education, and skills. All content is in that one file.

- Set your actual email, GitHub URL, and LinkedIn URL. The site only shows contact links when values are filled in.
- To enable the Resume link, put `resume.pdf` in `public/` and change `resume` to `'/resume.pdf'`.
- Add project URLs to `href` when your projects are on GitHub or live online.
- Double-check all dates, descriptions, and skills before publishing.

## Deploy to Vercel (juancruz.dev)

1. Create a NEW GitHub repository named `juancruz-portfolio`.
2. Upload all project files and folders (not the .zip) into the repository root.
3. Visit https://vercel.com/new and import the GitHub repository.
4. Vercel will recognize Next.js. Keep default root directory and click Deploy.
5. Once deployed, open Project → Settings → Domains and add `juancruz.dev` and `www.juancruz.dev`.
6. Open Cloudflare → your domain → DNS. Add/adjust the exact records displayed in Vercel's domain setup. Avoid duplicate or conflicting A/CNAME records, and start with Cloudflare proxy disabled ('DNS only') unless Vercel instructs otherwise.
7. Once Vercel confirms the domains, choose `juancruz.dev` as primary and redirect `www` to it.

Every subsequent push to your main GitHub branch automatically triggers a new Vercel deployment.

## Build before deploying

Run `npm run build`. If the build succeeds, the project is ready to deploy.

## Notes

This package excludes node_modules and the build folder: `npm install` recreates those dependencies. No email or social profiles were invented; add the real ones before launch.

## Screenshot-inspired layout update

The top-right navigation is stacked vertically, and its `experience`, `about`, and `contact` anchors scroll to real sections. The resume link opens `public/resume.pdf` after you add that file and set `profile.resume = '/resume.pdf'` in `data/portfolio.ts`.

The GitHub, X, and LinkedIn icons at the bottom are clickable. Until you set `profile.github`, `profile.twitter`, and `profile.linkedin` in `data/portfolio.ts`, they lead to the platforms' homepages, **not your profiles**. Be sure to supply your own URLs before publishing.

The work and project entries without a URL show plain company/project names. Add an `href` to make a name clickable.
