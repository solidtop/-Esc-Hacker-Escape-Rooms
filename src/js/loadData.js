export default async function loadData() {
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
    const data = await res.json();
    // console.log(data.challenge);
    return data.challenges;
};
