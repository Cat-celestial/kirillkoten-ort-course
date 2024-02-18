import { createApp, ref, watch } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
    setup() {
        const appTitle = ref("Oh sheet, here we Vue again");
        const clicks = ref(0);
        const action = () => {
            clicks.value++;
        }

        watch(clicks, (newValue, oldValue) => {
            console.log("Old", oldValue);
            console.log("New", newValue);
        });

        return {
            appTitle,
            clicks,
            action
        }
    }
}).mount("#app");