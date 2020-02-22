import App from '../../components/App.vue'
import { mount } from '@vue/test-utils'

describe("App.vue", () => {
    it("render", () => {
        const warpper = mount(App);
        expect(warpper.find('.counter').exists()).toBe(true);
    })
})