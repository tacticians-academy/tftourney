import { defineConfig } from 'vite'

import tsconfigPaths from 'vite-tsconfig-paths'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	root: 'client',
	build: {
		outDir: '../~$dist/public',
		reportCompressedSize: false,
	},
	server: {
		port: 4000,
		proxy: {
			'^/api': {
				target: 'http://localhost:4001',
				changeOrigin: true,
			},
		},
	},
	define: {
		__VUE_OPTIONS_API__: false,
	},
	plugins: [
		tsconfigPaths({ loose: true }),
		vue(),
	],
})
