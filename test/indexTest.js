const sinon = require( 'sinon' )

describe( 'index.js', () => {
  let spy;

  beforeEach( () => {
    spy = sinon.spy( console, 'log' );
  } );

  describe( 'printBadges()', () => {

    afterEach( () => {
      spy.restore();
    } );

    it( 'invokes console.log() once for each element in the passed-in array', () => {
      printBadges( [ 'Lisa', 'Kaitlin', 'Jan' ] );

      expect( spy.callCount )
        .to.eq( 3 );
    } );

    it( 'prints out a welcome badge for each employee', () => {
      printBadges( [ 'Joe', 'Gabe' ] );

      expect( spy.calledWithExactly( 'Welcome Joe! You are employee #1.' ), "Element was `Joe`, expected 'Welcome Joe! You are employee #1.'" )
        .to.be
        .true;
      expect( spy.calledWithExactly( 'Welcome Gabe! You are employee #2.' ), "Element was `Joe`, expected 'Welcome Joe! You are employee #2.'" )
        .to.be
        .true;
    } );

    it( 'returns the passed-in array', () => {
      const arr = [];

      expect( printBadges( arr ) )
        .to.eq( arr );
    } );
  } );

  describe( 'countdown()', () => {
    afterEach( () => {
      spy.restore();
    } );

    it( 'invokes console.log once for each number, counting down from the number provided to zero', () => {
      countdown( 10 );
      expect( spy.callCount, "Expected countdown(10) to invoke 11 console.logs" )
        .to.eq( 11 );
    } );

    it( 'logs each number when counting down, starting from the number provided', () => {
      countdown( 4 );
      expect( spy.calledWithExactly( 4 ), "Expected countdown(4) to log 4 first" )
        .to.be.true;
      expect( spy.calledWithExactly( 3 ), "Expected countdown(4) to log 3 after 4" )
        .to.be.true;
      expect( spy.calledWithExactly( 2 ), "Expected countdown(4) to log 2 after 3" )
        .to.be.true;
      expect( spy.calledWithExactly( 1 ), "Expected countdown(4) to log 1 after 2" )
        .to.be.true;
      expect( spy.calledWithExactly( 0 ), "Expected countdown(4) to log 0 after 1" )
        .to.be.true;
    } );
  } );
} );
