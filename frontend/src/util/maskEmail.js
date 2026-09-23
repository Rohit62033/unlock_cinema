export const maskEmail = (email) =>{
  if(!email || !email.includes("@")) return

  const [username ,domain] = email.split("@")

  if(!username || !domain) return ""

  if(username.length <=2 ){
    return `${username[0]}*@${domain}`
  }

  const visiblePart = username.slice(0,2)
  const hiddenPart ="*".repeat(username.length-2)

  return `${visiblePart}${hiddenPart}@${domain}`
}