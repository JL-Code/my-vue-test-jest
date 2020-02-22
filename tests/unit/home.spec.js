import { mount } from '@vue/test-utils'
import Home from '@/views/Home'

describe("Home.vue", () => {
    it("renders", () => {

        const warpper = mount(Home);
        const HelloWorld = warpper.find({ name: 'HelloWorld' });

        expect(HelloWorld.exists()).toBe(true)
    })
})