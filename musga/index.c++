// C++ code
//
int counter;
int nC4 = 262;
int nD4 = 294;
int nE4 = 329;
int nF4 = 349;
int nFS4 = 370;
int nG4 = 392;
int nGS4 = 415;
int nA4 = 440;
int nAS4 = 466;
int nB4 = 494;
int nC5 = 523;
int nCS5 = 554;
int nD5 = 587;
int nDS5 = 622;
int nE5 = 659;
int nF5 = 698;
int nFS5 = 740;
int nG5 = 784;
int nGS5 = 831;
int nA5 = 880;

void setup()
{
  pinMode(11, OUTPUT);

  for (counter = 0; counter < 1; ++counter) {
    lullaby();
    walkOfLife();
    moonlightSonata();
    // despair();
  }
}

void lullaby() {
    tone(11, nB4, 500);
    delay(500);
    tone(11, nB4, 500);
    delay(500);
    tone(11, nD5, 1100);
    delay(1100);
    tone(11, nG4, 500);
    delay(500);

    tone(11, nB4, 500);
    delay(500);
    tone(11, nB4, 500);
    delay(500);
    tone(11, nD5, 1100);
    delay(1100);
    tone(11, nG4, 500);
    delay(500);

    tone(11, nB4, 500);
    delay(500);
    tone(11, nD5, 500);
    delay(500);
    tone(11, nG5, 900);
    delay(900);
    tone(11, nFS5, 900);
    delay(900);
    tone(11, nE5, 900);
    delay(900);
    tone(11, nE5, 900);
    delay(900);
    tone(11, nD5, 900);
    delay(900);

    tone(11, nA4, 500);
    delay(500);
    tone(11, nB4, 400);
    delay(400);
    tone(11, nB4, 100);
    delay(100);
    tone(11, nC5, 700);
    delay(700);
    tone(11, nA4, 900);
    delay(950);

    tone(11, nA4, 500);
    delay(500);
    tone(11, nB4, 400);
    delay(400);
    tone(11, nB4, 100);
    delay(100);
    tone(11, nC5, 700);
    delay(700);
    tone(11, nA4, 900);
    delay(950);

    tone(11, nA4, 500);
    delay(500);
    tone(11, nC5, 600);
    delay(600);
    tone(11, nFS5, 500);
    delay(500);
    tone(11, nE5, 500);
    delay(500);
    tone(11, nD5, 700);
    delay(700);
    tone(11, nFS5, 900);
    delay(900);
    tone(11, nG5, 600);
    delay(3000);
}

void walkOfLife() {   
    tone(11, nGS4, 500);
    delay(500);
    tone(11, nGS4, 400);
    delay(800);

    tone(11, nFS4, 200);
    delay(200);
    tone(11, nGS4, 200);
    delay(200);
    tone(11, nB4, 400);
    delay(400);
    tone(11, nGS4, 200);
    delay(200);
    tone(11, nFS4, 300);
    delay(300);
    tone(11, nE4, 500);
    delay(500);
    tone(11, nE4, 500);
    delay(1300);

    tone(11, nFS4, 200);
    delay(200);
    tone(11, nGS4, 300);
    delay(300);
    tone(11, nB4, 500);
    delay(500);
    tone(11, nB4, 400);
    delay(800);

    tone(11, nFS4, 200);
    delay(200);
    tone(11, nGS4, 200);
    delay(200);
    tone(11, nB4, 400);
    delay(400);
    tone(11, nGS4, 200);
    delay(200);
    tone(11, nFS4, 300);
    delay(300);
    tone(11, nE4, 500);
    delay(500);
    tone(11, nE4, 500);
    delay(800);

    tone(11, nFS4, 100);
    delay(100);
    tone(11, nGS4, 400);
    delay(400);
    tone(11, nFS4, 500);
    delay(1500);
}

void moonlightSonata() {
    tone(11, nE4, 400);
    delay(400);
    tone(11, nA4, 400);
    delay(400);
    tone(11, nC5, 400);
    delay(400);
    tone(11, nE4, 400);
    delay(400);
    tone(11, nA4, 400);
    delay(400);
    tone(11, nC5, 400);
    delay(400);
    tone(11, nE4, 400);
    delay(400);
    tone(11, nA4, 400);
    delay(400);
    tone(11, nC5, 400);
    delay(400);
    tone(11, nE4, 400);
    delay(400);
    tone(11, nA4, 400);
    delay(400);
    tone(11, nC5, 400);
    delay(400);

    tone(11, nF4, 400);
    delay(400);
    tone(11, nA4, 400);
    delay(400);
    tone(11, nC5, 400);
    delay(400);
    tone(11, nF4, 400);
    delay(400);
    tone(11, nA4, 400);
    delay(400);
    tone(11, nC5, 400);
    delay(400);

    tone(11, nF4, 400);
    delay(400);
    tone(11, nAS4, 400);
    delay(400);
    tone(11, nD5, 400);
    delay(400);
    tone(11, nF4, 400);
    delay(400);
    tone(11, nAS4, 400);
    delay(400);
    tone(11, nD5, 400);
    delay(400);

    tone(11, nE4, 400);
    delay(400);
    tone(11, nGS4, 400);
    delay(400);
    tone(11, nD5, 400);
    delay(400);
    tone(11, nE4, 400);
    delay(400);
    tone(11, nA4, 400);
    delay(400);
    tone(11, nC5, 400);
    delay(400);

    tone(11, nE4, 400);
    delay(400);
    tone(11, nA4, 400);
    delay(400);
    tone(11, nB4, 400);
    delay(400);

    tone(11, nD4, 400);
    delay(400);
    tone(11, nGS4, 400);
    delay(400);
    tone(11, nB4, 400);
    delay(400);

    tone(11, nC4, 400);
    delay(400);
    tone(11, nE4, 400);
    delay(400);
    tone(11, nA4, 400);
    delay(400);

    tone(11, nE4, 400);
    delay(400);
    tone(11, nA4, 400);
    delay(400);
    tone(11, nC5, 400);
    delay(400);

    tone(11, nE4, 400);
    delay(400);
    tone(11, nA4, 400);
    delay(400);
    tone(11, nC5, 400);
    delay(400);

    tone(11, nE5, 400);
    delay(400);

    tone(11, nE4, 400);
    delay(400);
    tone(11, nA4, 400);
    delay(400);

    tone(11, nE5, 500);
    delay(500);

    tone(11, nE5, 500);
    delay(500);

    tone(11, nE4, 400);
    delay(400);
    tone(11, nB4, 400);
    delay(400);

    tone(11, nD5, 500);
    delay(500);

    tone(11, nE4, 400);
    delay(400);
    tone(11, nB4, 400);
    delay(400);
    tone(11, nD5, 400);
    delay(400);
    tone(11, nE4, 400);
    delay(400);
    tone(11, nB4, 400);
    delay(400);

    tone(11, nE5, 500);
    delay(500);

    tone(11, nC5, 300);
    delay(300);

    tone(11, nE5, 500);
    delay(500);
    tone(11, nE5, 500);
    delay(500);

    tone(11, nE4, 400);
    delay(400);
    tone(11, nA4, 400);
    delay(400);
    tone(11, nC5, 500);
    delay(500);

    tone(11, nA4, 1000);
    delay(1000);
}

void despair() {
  int counter;
  // for (counter = 0; counter < 2; ++counter) {
  // tone(11, nC4, 300);
  // delay(300);
  // tone(11, nE4, 300);
  // delay(300);
  // tone(11, nG4, 300);
  // delay(300);
  // tone(11, nC4, 300);
  // }

  // for (counter = 0; counter < 3; ++counter) {
  // tone(11, nG4, 300);
  // delay(300);
  // tone(11, nB4, 300);
  // delay(300);
  // tone(11, nD5, 300);
  // delay(300);
  // tone(11, nG4, 300);
  // }

  // for (counter = 0; counter < 3; ++counter) {
  // tone(11, nF4, 500);
  // delay(500);
  // tone(11, nA4, 500);
  // delay(500);
  // tone(11, nC5, 500);
  // delay(500);
  // tone(11, nA4, 500);
  // delay(500);
  // }

  tone(11, nC4, 400);
  delay(400);
  tone(11, nD4, 400);
  delay(400);
  tone(11, nE4, 400);
  delay(400);
  tone(11, nF4, 400);
  delay(400);
  tone(11, nG4, 400);
  delay(400);
  tone(11, nA4, 400);
  delay(400);
  tone(11, nB4, 1000);
  delay(1000);
  tone(11, nB4, 1000);
  delay(1000);
  tone(11, nB4, 1000);
  delay(1000);
  tone(11, nCS5, 1000);
  delay(1000);
  tone(11, nD5, 1000);
  delay(1000);

  // for (counter = 0; counter < 10; ++counter) {
  //   tone(11, nCS5, 100);
  //   delay(100);
  // }
}
 
void loop()
{
  delay(10);
}