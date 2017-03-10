describe('question', () => {
  let test;

  describe('when valid values are passed', () => {

    beforeEach(() => {
      test = {};
      test.subject = require('../lib/question');
    });

    it('should return a string "This is not a question!"', () => {
      const output = test.subject('Who is this person');
      expect(output).toEqual('This is not a question!');
    });

    describe('listening', () => {
      describe('when passed string that starts with "when"', () => {
        it('should return a string containing am or pm', () => {
          const output = test.subject('When whould we do this?');
          expect(/.+am|pm.*/i.test(output)).toBe(true);
        });
      });

      describe('when passed a string that starts with "what"', () => {
        describe('when the string contains "time"', () => {
          it('should return a string containing am or pm', () => {
            const output = test.subject('What time and what day?');
            expect(/.+am|pm.*/i.test(output)).toBe(true);
          });
        });

        describe('when the string does not contain "time"', () => {
          describe('when the string also contains "day"', () => {
            it('should return a string cotaining a day of the week', () => {
              const dayRegex = /.*monday|tuesday|wednesday|thursday|friday|saturday|sunday.*/i;
              const output = test.subject('What time and what day?');
              expect(dayRegex.test(output)).toBe(true);
            });
          });
        });

        describe('when the string does not contain "how old"', () => {
          describe('when the string contains "age" ', () => {
            it('should return a string containing a number', () => {
              const output = test.subject('How old are you?');
              expect(/.*[0-9].*/.test(output)).toBe(true);
            });
          });
        });
      });

      describe('when the string does not contain "age"', () => {
        describe('when the string contains "how old" ', () => {
          it('should return a string containing a number', () => {
            const output = test.subject('What age are you?');
            expect(/.*[0-9].*/.test(output)).toBe(true);
          });
        });
      });

      describe('when the string contains for "who"', () => {
        describe('when the string only contains "who"', () => {
          it('should return a string containing "is who"', () => {
            const output = test.subject('Who is this person?');
            expect(/.*is.+who.*/i.test(output)).toBe(true);
          });
        });

        describe('when the string also contains "favorite"', () => {
          it('should return a string containing "my favorite"', () => {
            const output = test.subject('Who is your favorite movie star?');
            expect(/.*my.+favorite.*/i.test(output)).toBe(true);
          });
        });
      });

      describe('when the string contains "where"', () => {
        describe('when the string only contains "where"', () => {
          it('should return a string containing "house"', () => {
            const output = test.subject('Where do you want to go?');
            expect(/.*house.*/i.test(output)).toBe(true);
          });
        });

        describe('when the string also contains "favorite"', () => {
          it('should return a string containing "my favorite place"', () => {
            const output = test.subject('Where is your favorite place to study?');
            expect(/.*my.+favorite.+place*/i.test(output)).toBe(true);
          });
        });
      });

      describe('when the string is a yes or no question', () => {
        describe('when the string contains "is", "do", "does", "are" & "will"', () => {
          it('should return a string containing "yes" or "no"', () => {
            const output = test.subject('Do you want to build a snowman?');
            expect(/.*yes|no.*/i.test(output)).toBe(true);
          });
        });
      });
    });
  });
});