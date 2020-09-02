import HelloWorld from "../components/HelloWorld.vue";

export default {
  title: "HelloWorld",
  component: HelloWorld,
  argTypes: {
    msg: {
      defaultValue: "Cool message",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HelloWorld },
  template: `<HelloWorld :msg="msg" />`,
});

export const Primary = Template.bind({});
Primary.args = {
  msg: "ok here i am",
};
