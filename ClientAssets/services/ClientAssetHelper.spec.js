import ClientAssestHelpers from './ClientAssestHelpers';

describe('Test ClientAssestHelpers.formatData', () => {
  it('ClientAssestHelpers should return [] when formatdata is called with undefined', () => {
        const input = undefined;
        expect(ClientAssestHelpers.formatData(input)).toEqual([]);
      });

  it('ClientAssestHelpers should return [] when formatdata is called with null', () => {
    const input = null;
    expect(ClientAssestHelpers.formatData(input)).toEqual([]);
  });

  it('ClientAssestHelpers should return [] when formatdata is called with {}',() => {
    const input = {};
    expect(ClientAssestHelpers.formatData(input)).toEqual([]);
  });

  it('ClientAssestHelpers should return [] when formatdata is called with {data: null}',() => {
    const input = {data: null};
    expect(ClientAssestHelpers.formatData(input)).toEqual([]);
  });

  it('ClientAssestHelpers should return valid data when formatdata is called with valid input', () => {
    const input = {
      data:{
        items: [
          {
            id: 12312-123123-1213-3123,
            name: "james",
            age: 23,
            timestamp:-55176279,
            message: "hello prem"
          }
        ]
      }
    }
    const output = [
      {
            id: 12312-123123-1213-3123,
            name: "james",
            age: 23,
            date: new Date("YYMMDD",55176279),
            time: new Date("HHMMSS",55176279),
            message: "hello prem"
      }
    ]
    expect(ClientAssestHelpers.formatData(input)).toEqual(output);
  });
})