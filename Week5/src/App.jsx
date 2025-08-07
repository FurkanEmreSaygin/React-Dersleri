import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [firstName, setFirstName] = useState("Furkan")
  const [lastName, setLastName] = useState("Yılmaz")

  useEffect(()=> {
    console.log("Component mount edildi")
  })
  // useEffect her zaman component mount edildiğinde çalışır.

  useEffect(()=> {
    console.log("Sadece bir kez çalışacak")
  },[])
  // boş bir array ile useEffect kullanımı, component mount olduğunda sadece bir kez çalışır.

  useEffect(()=> {
    console.log(`İsim değişti: ${firstName}` )
  },[firstName])
  // firstName değiştiğinde ve ilk çağrıldığında bu useEffect tetiklenecek.
  
  useEffect(()=> {
    console.log(`Soyisim değişti: ${lastName}` )
  },[lastName])
  // lastName değiştiğinde ve ilk çağrıldığında bu useEffect tetiklenecek.
  return (
    <>
      <div>
        <button onClick={()=> setFirstName("Ahmed")}>İsmi Ahmed yap</button>
        <button onClick={()=> setLastName("Kara")}>Soyismi Kara yap</button>
        <h1>Merhaba, {firstName} {lastName}!</h1>
      </div>
      <div>
        <button onClick={()=> setFirstName("Furkan")}>İsmi Furkan yap</button>
        <button onClick={()=> setLastName("Yılmaz")}>Soyismi Yılmaz yap</button>
      </div>
    </>
  )
}

export default App
