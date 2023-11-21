
import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"

import { useState } from "react"



function App() {

  const [count, setCount] = useState<number>(1)

  return (
    <>
   <Heading title="Hello world!!"/>
   <Section >
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae vel est sequi veritatis debitis laborum repellendus architecto voluptas consequuntur quasi? Maiores, minima cumque? Impedit at officia ex delectus eius, illum illo aspernatur, recusandae, eaque mollitia ipsa magnam nulla suscipit quas quidem iure molestiae ea rerum necessitatibus! Repellat, consequatur debitis! Nihil corporis, similique recusandae vitae iure voluptatem sint reprehenderit magni officiis fuga incidunt placeat eos? Omnis dolorum nam placeat ex, neque sunt aliquid aliquam repellendus ipsa distinctio laborum perspiciatis eveniet eius. Tenetur rem sed est doloribus magnam aut voluptate, quasi praesentium, cum quae ipsa. Quos et tempora hic quae assumenda pariatur.
   </Section>

   <Counter setCount={setCount} > Count is {count}</Counter>
   <List items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} 
   render={(item: string) => <span className="gold">{item}</span>} />
    </>
  )
}

export default App
