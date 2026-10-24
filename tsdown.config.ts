import { readdirSync } from "node:fs";
import { basename, extname, join } from "node:path";
import { defineConfig, type UserConfig } from "tsdown";

const isPath = "src";

const entryPoints: Record<string, string> = {
  bundle: "src/index.ts",
};

readdirSync(isPath)
  .filter((file: string) => file.startsWith("is-"))
  .filter((file: string) => !file.includes(".test"))
  .forEach((file) => {
    const name = basename(file, extname(file));
    entryPoints[name] = join(isPath, file);
  });

const commonConfig: UserConfig = {
  platform: "neutral",
  format: ["esm"],
  target: "es2022",
  dts: true,
  treeshake: true,
  outDir: "bundles",
  inputOptions: {
    optimization: {
      inlineConst: false,
    },
    experimental: {
      attachDebugInfo: "none",
    },
  },
};

export default defineConfig(
  Object.entries(entryPoints).map(([key, entry]) => ({
    entry: {
      [key]: entry,
    },
    ...commonConfig,
  })),
);
