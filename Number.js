num1 = 1;
num2 = 0;
num3 = 0;

for ( num1 = 1; num1 < 10; num1++ ) {
    for ( num2 = 0; num2 < 10; num2++ ) { 
        for ( num3 = 0; num3 < 10; num3++ ){
            square = ( num1 * num1 ) + ( num2 * num2 ) + ( num3 * num3 );
            number = ( num1 * 100) + ( num2 * 10 ) + ( num3 );
            if ( square == number ) {
            console.log(number);
            }
        }
    }
}
