type SizeCellType = {
  stepFrame: number;
  n: number;
};

type resultType = {
  lengthCell: number;
  widthCell: number;
  numberList: number;
  pipeLength: number;
};

export class Frame {
  lengthList: number;

  widthList: number;

  width: number;

  length: number;

  step: number;

  // ширина трубы
  bw: number;

  // ширина пролета по ширине
  wc: number = 0;

  // ширина пролета по длине
  lc: number = 0;

  // число пролетов по ширине
  nw: number = 0;

  // число пролетов по длине
  nl: number = 0;

  // длина трубы для каркаса
  pipeLength: number = 0;

  // число листов
  numberList: number = 0;

  static calculateSizeCell = (
    frameLength: number,
    pipeWidth: number,
    step: number,
  ): SizeCellType => {
    let n = 2;
    let stepFrame = frameLength - pipeWidth * 2;

    while (stepFrame >= step) {
      n += 2;
      stepFrame = (stepFrame + pipeWidth) / 2 - pipeWidth;
    }

    return { stepFrame, n };
  };

  static convertToMeterCeil = (value: number): number => {
    const millimetersInMeter = 1000;

    return Math.ceil(value / millimetersInMeter);
  };

  static convertToMeterFloor = (value: number): number => {
    const millimetersInMeter = 1000;

    return Math.floor(value) / millimetersInMeter;
  };

  constructor(
    width: number,
    length: number,
    step = 800,
    widthList = 1000,
    bw = 20,
    lengthList = 1000,
  ) {
    this.width = width;
    this.length = length;
    this.step = step;
    this.widthList = widthList;
    this.bw = bw;
    this.lengthList = lengthList;
  }

  private calculateCellWidth = (): void => {
    const { stepFrame, n } = Frame.calculateSizeCell(this.width, this.bw, this.step);

    this.wc = stepFrame;
    this.nw = n;
  };

  private calculateCellLength = (): void => {
    const { stepFrame, n } = Frame.calculateSizeCell(this.length, this.bw, this.step);

    this.lc = stepFrame;
    this.nl = n;
  };

  private calculatePipeLength = (): void => {
    const pipeLengthByWidth = this.width * (this.nl + 1);
    const pipeLengthByLength = this.lc * (this.nw + 1) * this.nl;

    this.pipeLength = pipeLengthByWidth + pipeLengthByLength;
  };

  private calculateCounterList = (): void => {
    const numberListByWidth = Math.floor(this.width / this.widthList);

    const numberWholeListByLength = Math.floor(this.length / this.lengthList);

    const numberRowsOneList = Math.floor(
      this.widthList / (this.width - numberListByWidth * this.widthList),
    );

    const numberSliceList = Math.ceil(numberWholeListByLength / numberRowsOneList);

    this.numberList = numberWholeListByLength * numberListByWidth + numberSliceList;
  };

  public calculateDataFrame = (): resultType => {
    this.calculateCellLength();
    this.calculateCellWidth();
    this.calculatePipeLength();
    this.calculateCounterList();

    return {
      lengthCell: Frame.convertToMeterFloor(this.lc),
      widthCell: Frame.convertToMeterFloor(this.wc),
      numberList: this.numberList,
      pipeLength: Frame.convertToMeterCeil(this.pipeLength),
    };
  };
}
