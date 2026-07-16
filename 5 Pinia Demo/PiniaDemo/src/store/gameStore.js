import { defineStore } from "pinia";
import { ref, computed } from 'vue';

// export const useGameStore = defineStore("gameStore", {
//     state:()=>({
//         score: 50,
//         maxHealth:100,
//         maxAttack:30,
//         maxDefense:10
//     }),
//     getters:{
//         getScore(){
//             return this.score;
//         },
//         getWinningScore(){
//             return this.maxHealth;
//         },
//     },
//     actions:{
//         setNextAttack(){
//             let attack = Math.floor(Math.random() * this.maxAttack) + 1;
//             console.log("Attack: ", attack);
//             this.score += attack;
//         },
//         setNextDefense(){
//             let defense = Math.floor(Math.random() * this.maxDefense) + 1;
//             console.log("Defense: ", defense);
//             this.score -= defense;
//         }, 
//         resetScore(){
//             this.score = 50;
//         },
//     }
// });

export const useGameStore = defineStore("gameStore", () => {
    
    const score = ref(50);
    const maxHealth = ref(100);
    const maxAttack = ref(30);
    const maxDefense = ref(10);

    const getScore = computed(()=> score.value);
    const getWinningScore= computed(() => maxHealth.value);

    const setNextAttack = () => {
        let attack = Math.floor(Math.random() * maxAttack.value) + 1;
        console.log("Attack: ", attack);
        score.value += attack;
    };

    const setNextDefense = () => {
        let defense = Math.floor(Math.random() * maxDefense.value) + 1;
        console.log("Defense: ", defense);
        score.value -= defense;
    }; 

    const resetScore = () => {
        score.value = 50;
    };
    
    return {
        // State
        score,
        maxHealth,
        maxAttack,
        maxDefense,
        // Getters
        getScore,
        getWinningScore,
        // Actions
        setNextAttack,
        setNextDefense,
        resetScore,
    }
});