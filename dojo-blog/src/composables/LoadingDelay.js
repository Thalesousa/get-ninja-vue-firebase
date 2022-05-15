export async function Delay(time) {
  await new Promise(resolve => {
    setTimeout(resolve, time)
  })
}