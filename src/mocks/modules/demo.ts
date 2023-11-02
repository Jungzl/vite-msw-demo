import {faker} from "@faker-js/faker";
import {delay, http, HttpResponse} from "msw";

export const demoInfo = () => ({
    id: faker.string.nanoid(),
    title: faker.lorem.sentences(1),
    desc: faker.lorem.sentences(2),
    cover: faker.image.url({width: 200, height: 200}),
})

const handlers = [
    http.get('/mock/demo/list', async () => {
        await delay(faker.number.int({min: 100, max: 1000}))
        return HttpResponse.json({
            code: 0,
            data: Array.from({length: 10}, () => {
                return demoInfo()
            }),
            message: 'success'
        }, {
            headers: {
                'Set-Cookie': `something=${encodeURIComponent('测试')}`
            }
        })
    }),
]

export default handlers
