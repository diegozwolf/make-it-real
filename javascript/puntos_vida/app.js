function isAlive(playerName, points) {
  if(playerName == "ikk" && points > 30) {
    return true;
  {
  else if(playerName == "gut" && points > 10) {
    return true;
  }
  else {
    return false;
  }    
}
    
isAlive("ikk", 50); 
isAlive("gut", 50); 
isAlive("ikk", 20); 
isAlive("gut", 5); 
isAlive("trek", 50); 