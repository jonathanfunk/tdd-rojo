describe('question', () => {
  let test;

  describe('when valid values are passed', () => {
    beforeEach(() => {
      test = {};
      test.subject = require('../lib/question');
    });
    it('should return a string "This is not a question!"', () => {
      const input = 'Who is this person';
      const output = test.subject(input);
      expect(output).toEqual('This is not a question!');
    });

    describe('.listen', () => {
      describe('when passed string that starts with "when"', () => {
        it('should return a string containing am or pm', () => {
          const timeRegex = /.+am|pm.*/i;
          const input = 'When whould we do this?';
          const output = test.subject(input);
          const result = timeRegex.test(output);
          expect(result).toBe(true);
        });
      });
      describe('when passed a string that starts with "what"', () => {
        describe('when the string contains "time"', () => {
          it('should return a string containing am or pm', () => {
            const timeRegex = /.+am|pm.*/i;
            const input = 'What time and what day?';
            const output = test.subject(input);
            const result = timeRegex.test(output);
            expect(result).toBe(true);
          });
        });
        describe('when the string does not contain "time"', () => {
          describe('when the string also contains "day"', () => {
            it('should return a string cotaining a day of the week', () => {
              const dayRegex = /.*monday|tuesday|wednesday|thursday|friday|saturday|sunday.*/i;
              const input = 'What time and what day?';
              const output = test.subject(input);
              const result = dayRegex.test(output);
              expect(result).toBe(true);
            });
          });
        });
        describe('when the string asks for "who"', () => {
          describe('when the string contains "who"', () => {
            it('should return a string cotaining "is who"', () => {
              const isWhoRegex = /.*is.+who.*/i;
              const input = 'Who is this person?';
              const output = test.subject(input);
              const result = isWhoRegex.test(output);
              expect(result).toBe(true);
            });
          });
        });
        describe('when the string contains "age"', () => {
          describe('when the string contains "age" ', () => {
            it('should return a string containing a number', () => {
              const regexNumbers = /.*[0-9].*/;
              const input = 'How old are you?';
              const output = test.subject(input);
              const result = regexNumbers.test(output);
              expect(result).toBe(true);
            });
          });
        });
        describe('when the string contains "how old"', () => {
          describe('when the string contains "how old" ', () => {
            it('should return a string containing a number', () => {
              const regexNumbers = /.*[0-9].*/;
              const input = 'What age are you?';
              const output = test.subject(input);
              const result = regexNumbers.test(output);
              expect(result).toBe(true);
            });
          });
        });
      });
    });
  });
});