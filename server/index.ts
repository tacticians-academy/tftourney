import Fastify from 'fastify'
import FastifyCORS from 'fastify-cors'

import { TESTING } from '#c/utils'

import { useAdminRoutes } from '#s/controllers/admin'

import { APIError } from '#s/helpers/errors'

const clientURL = TESTING ? 'http://localhost:4000' : 'https://tftourney.netlify.app'

const fastify = Fastify({
	logger: true,
})

fastify
	.register(FastifyCORS, {
		origin: clientURL,
	})
	.setErrorHandler((error, request, reply) => {
		if (error instanceof APIError) {
			reply.statusCode = 400
			reply.send({ message: error.message, cancel: error.cancel })
		} else {
			throw error
		}
	})
	.after(() => {
		useAdminRoutes(fastify)
	})

fastify.listen(process.env.PORT ?? 3001, '0.0.0.0', (error, address) => {
	if (error != null) {
		throw error
	}
})
