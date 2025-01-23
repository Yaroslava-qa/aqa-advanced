const users = [
    {name: "Olivia", email: "olivia111@gmail.com", age: 1 },
    {name: "Mykola", email: "mykola234@gmail.com", age: 22 },
    {name: "Mykyta", email: "mykyta678@gmail.com", age: 100 }
  ]

  for (const { name, email, age } of users) {
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Age: ${age}`)}