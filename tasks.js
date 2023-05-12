import { 
	// vlozenie zaznamu
	collection, addDoc,
	// vyber zaznamov 
	getDocs, query 
} from "firebase/firestore";

const tasks=reactive({pole:[]})


export const useTasks = () => {
  let { $firestore } = useNuxtApp()

	const addTask = async (newTask) => {

		const docRef = await addDoc(collection($firestore, "tasks"), newTask);
		fetch()
	}

	const fetch = async () => {
		tasks.pole.length = 0
		const q = query(collection($firestore, "tasks"));
		const querySnapshot = await getDocs(q);
		
		querySnapshot.forEach((doc) => {
			tasks.pole.push({
				id: doc.id,
				...doc.data()
			})
		});
	}
  return {tasks, addTask }
}