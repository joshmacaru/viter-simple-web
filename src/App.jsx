import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Button from './component/partials/button/Button'
import FeatureCard from './component/partials/feature/Feature'

function App() {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState(0);
  console.log(count);

  const addButton = () => {
    setCount(count + 1);
    console.log("Add");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="header bg-blue-600 py-4">
        <div className="container mx-auto py-6">
          <h1 className="text-white font-bold text-3xl">My Simple Website</h1>
        </div>
      </header>

      <main className="flex-grow">
        <section>
          <div className="container mx-auto py-6 px-10">
            <h2 className="text-black font-semibold text-2xl pb-4">
              Welcome to My Site
            </h2>
            <p className="pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              harum labore pariatur?
            </p>
            <div className="bg-gray-200 rounded-md py-6 px-6">
              <h3 className="font-semibold text-xl pb-2">Interactive Button</h3>
              <p className="pb-2">
                You've clicked the button{" "}
                <span className="text-red-700 font-bold">{count}</span> times
              </p>

              <div className="flex gap-4 pb-2">
                <Button buttonFunction={addButton} buttonText={"Click Me!"} />
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-4 p-8">
          <FeatureCard
            title="Featured One"
            description="This is a description of the first feature of this website."
          />
          <FeatureCard
            title="Featured Two"
            description="This is a description of the second feature of this website."
          />
        </section>
      </main>

      <footer className="py-4 bg-blue-950 mt-auto">
        <div className="container mx-auto py-6 text-center">
          <p className="text-white">
            © 2025 My Simple Website. All right reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App
