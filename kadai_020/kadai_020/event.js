function button(){
  const text=document.getElementById('text').textContent='ボタンをクリックしました';
}
const btn=document.getElementById('btn').addEventListener('click',button);