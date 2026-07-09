import {ref} from 'vue';
export function useCounter(value = 0, step = 1) {
  const count = ref(value);

  const increment = () =>{
    count.value+=step;
  };
  const decrement = () => {
    count.value-=step;
  };

  return { count, increment, decrement };
}