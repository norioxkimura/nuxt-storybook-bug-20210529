import Counter from "~/components/counter.vue";

export default {
  title: "Counter"
};

export const Default = () => ({
  components: { Counter },
  template: "<Counter/>"
});
