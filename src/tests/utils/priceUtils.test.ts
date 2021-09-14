import { truncateNumber } from "../../utils/priceUtils";

it("should truncate a decimal number",()=>{
    expect(truncateNumber(123.123,2)).toBe(123.12)
    expect(truncateNumber(123.999,2)).toBe(123.99)
    expect(truncateNumber(1230987.999879,1)).toBe(1230987.9)
    expect(truncateNumber(1230987,1)).toBe(1230987)
    expect(truncateNumber(1230987,0)).toBe(1230987)
})