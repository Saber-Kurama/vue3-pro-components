import { defineComponent } from "vue";

const SaberQueryTable = defineComponent({
    name: 'SaberQueryTable',
    setup(props, {slots}) {
        console.log('???ZXX??', slots.default)
        return () => (
            <div>saaa
                {slots.default && slots.default().map((v) => {
                    return <div>ssss(({v}))</div>
                })}
            </div>
        )
    }
})

export default SaberQueryTable