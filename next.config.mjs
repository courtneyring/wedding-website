/** @type {import('next').NextConfig} */
import pkg from './package.json' with { type: 'json' };
import depPkg from './node_modules/@courtneyring/components-library/package.json' with { type: 'json' };

console.log(`\n📦 Building ${pkg.name} v${pkg.version} | @courtneyring/components-library v${depPkg.version}\n`);


const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;