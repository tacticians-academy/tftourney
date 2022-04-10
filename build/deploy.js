import fsExtra from 'fs-extra'
import path from 'path'

const DEPLOY_DIR = 'tftourney-server-deploy'

function copy(internalPath) {
	const destPath = path.join('..', DEPLOY_DIR, internalPath)
	fsExtra.copySync(internalPath, destPath)
}

// Run

copy('package.json')
copy('~$dist/common')
copy('~$dist/server')
