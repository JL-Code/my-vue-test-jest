

import { mount } from '@vue/test-utils'
import HelloWorld from '../../src/components/HelloWorld.vue';

describe("HelloWorld.vue", () => {

    it("Welcome to Your Vue.js App", () => {
        const message = "Welcome to Your Vue.js App";
        const warpper = mount(HelloWorld, {
            propsData: {
                msg: message
            }
        });
        expect(warpper.text()).toBe(message)
    })
})