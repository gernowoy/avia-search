export interface Flights {
  result: Result;
}

export interface Result {
  hello: string;
  flights:    FlightElement[];
  bestPrices: BestPrices;
}

export interface BestPrices {
  ONE_CONNECTION: Direct;
  DIRECT:         Direct;
}

export interface Direct {
  bestFlights: BestFlight[];
}

export interface BestFlight {
  carrier: Carrier;
  price:   TotalClass;
}

export interface Carrier {
  uid:         AirlineCode;
  caption:     Caption;
  airlineCode: AirlineCode;
}

export enum AirlineCode {
  AF = "AF",
  Ay = "AY",
  Az = "AZ",
  BT = "BT",
  Ba = "BA",
  Fv = "FV",
  Kl = "KL",
  Lo = "LO",
  Lx = "LX",
  OS = "OS",
  PC = "PC",
  Sn = "SN",
  Su = "SU",
  Su1 = "SU1",
  Tk = "TK",
}

export enum Caption {
  AirBalticCorporationAS = "Air Baltic Corporation A/S",
  AirFrance = "Air France",
  AlitaliaSocietaAereaItaliana = "Alitalia Societa Aerea Italiana",
  AustrianAirlines = "Austrian Airlines",
  BritishAirwaysPLC = "British Airways p.l.c.",
  BrusselsAirlines = "Brussels Airlines",
  FinnairOyj = "Finnair Oyj",
  Klm = "KLM",
  LOTPolishAirlines = "LOT Polish Airlines",
  PegasusHavaTasimaciligiAS = "Pegasus Hava Tasimaciligi A.S.",
  SWISSInternationalAirLinesLtd = "SWISS International Air Lines Ltd",
  TurkHavaYollariAO = "TURK HAVA YOLLARI A.O.",
  АэрофлотРоссийскиеАвиалинии = "Аэрофлот - российские авиалинии",
  ГТКРоссия = "ГТК Россия",
}

export interface TotalClass {
  amount:       string;
  currency:     Currency;
  currencyCode: PriceCurrencyCode;
}

export enum Currency {
  Руб = "руб.",
}

export enum PriceCurrencyCode {
  Rub = "RUB",
}

export interface FlightElement {
  hasExtendedFare: boolean;
  flight:          FlightFlight;
  flightToken:     string;
}

export interface FlightFlight {
  carrier:                             Carrier;
  price:                               FlightPrice;
  servicesStatuses:                    ServicesStatuses;
  legs:                                Leg[];
  exchange:                            Exchange;
  isTripartiteContractDiscountApplied: boolean;
  international:                       boolean;
  seats:                               Seat[];
  refund:                              Refund;
  airlineAlliance?:                    AirlineAlliance;
}

export interface AirlineAlliance {
  uid:     string;
  caption: string;
}

export interface Exchange {
  ADULT: ExchangeADULT;
}

export interface ExchangeADULT {
  exchangeableBeforeDeparture: boolean;
  exchangeAfterDeparture:      TotalClass;
  exchangeBeforeDeparture:     TotalClass;
  exchangeableAfterDeparture:  boolean;
}

export interface Leg {
  duration: number;
  segments: Segment[];
}

export interface Segment {
  classOfServiceCode: ClassOfServiceCode;
  classOfService:     AirlineAlliance;
  departureAirport:   AirlineAlliance;
  departureCity?:     AirlineAlliance;
  aircraft:           AirlineAlliance;
  travelDuration:     number;
  arrivalCity?:       AirlineAlliance;
  arrivalDate:        Date;
  flightNumber:       string;
  techStopInfos:      unknown[];
  departureDate:      Date;
  stops:              number;
  servicesDetails:    ServicesDetails;
  airline:            Carrier;
  starting:           boolean;
  arrivalAirport:     AirlineAlliance;
  operatingAirline?:  Carrier;
}

export enum ClassOfServiceCode {
  A = "A",
  C = "C",
  D = "D",
  E = "E",
  H = "H",
  I = "I",
  J = "J",
  K = "K",
  L = "L",
  M = "M",
  P = "P",
  Q = "Q",
  S = "S",
  T = "T",
  U = "U",
  V = "V",
  W = "W",
  Z = "Z",
}

export interface ServicesDetails {
  freeCabinLuggage: Luggage;
  paidCabinLuggage: Luggage;
  tariffName?:      TariffName;
  fareBasis:        FareBasis;
  freeLuggage:      FreeLuggage;
  paidLuggage:      Luggage;
}

export interface FareBasis {
  ADULT: ADULTEnum;
}

export enum ADULTEnum {
  Artbyd1S = "ARTBYD1S",
  Aru2Cls = "ARU2CLS",
  Aru2Grn = "ARU2GRN",
  Asfxp0 = "ASFXP0",
  Cs40Aenn = "CS40AENN",
  Dnn0S0Fz = "DNN0S0FZ",
  Dsfxpof0 = "DSFXPOF0",
  Ertbyd1S = "ERTBYD1S",
  Hs50Ablg = "HS50ABLG",
  Is50Aenb = "IS50AENB",
  Jn2Bx = "JN2BX",
  Jru1Biz = "JRU1BIZ",
  Kn2Bx = "KN2BX",
  Lnb = "LNB",
  Ls50Ablg = "LS50ABLG",
  Mnn0S0Cz = "MNN0S0CZ",
  Pn2Xpb = "PN2XPB",
  Qn2Px = "QN2PX",
  Srcleu1 = "SRCLEU1",
  Srclrt44 = "SRCLRT44",
  Tn2Xpb = "TN2XPB",
  Ts50Ablg = "TS50ABLG",
  Ts55Ablg = "TS55ABLG",
  Uru2Grn = "URU2GRN",
  V03Clse0 = "V03CLSE0",
  Vn2Xpb = "VN2XPB",
  Vsavp0 = "VSAVP0",
  Vstdpof0 = "VSTDPOF0",
  W03Clse0 = "W03CLSE0",
  Zs50Aenb = "ZS50AENB",
  Zsfxpof0 = "ZSFXPOF0",
}

export interface Luggage {
}

export interface FreeLuggage {
  ADULT: FreeLuggageADULT;
}

export interface FreeLuggageADULT {
  pieces?: number;
  nil:     boolean;
  unit?:   Unit;
}

export enum Unit {
  Кг = "кг",
  Шт = "шт",
}

export enum TariffName {
  BeyondEssentials = "BEYOND ESSENTIALS",
  Business = "BUSINESS",
  BusinessClass = "BUSINESS CLASS",
  BusinessFlex = "BUSINESS FLEX",
  Businessemiflx = "BUSINESSEMIFLX",
  Classic = "CLASSIC",
  EconomyClassic = "ECONOMY CLASSIC",
  EconomyGreen = "ECONOMY GREEN",
  EconomyGreenClassic = "ECONOMY GREEN CLASSIC",
  EconomyLight2 = "ECONOMY LIGHT2",
  EconomyLite = "ECONOMY LITE",
  EconomySaver = "ECONOMY SAVER",
  EconomyStandard = "ECONOMY STANDARD",
  LightAndRelax = "LIGHT AND RELAX",
  Premiumsemiflx = "PREMIUMSEMIFLX",
}

export interface FlightPrice {
  total:            TotalClass;
  totalFeeAndTaxes: TotalClass;
  rates:            Rates;
  passengerPrices:  PassengerPrice[];
}

export interface PassengerPrice {
  total:                TotalClass;
  passengerType:        AirlineAlliance;
  singlePassengerTotal: TotalClass;
  passengerCount:       number;
  tariff:               TotalClass;
  feeAndTaxes:          TotalClass;
}

export interface Rates {
  totalUsd: Total;
  totalEur: Total;
}

export interface Total {
  amount:       string;
  currencyCode: TotalEurCurrencyCode;
}

export enum TotalEurCurrencyCode {
  Eur = "EUR",
  Usd = "USD",
}

export interface Refund {
  ADULT: RefundADULT;
}

export interface RefundADULT {
  refundableBeforeDeparture: boolean;
  refundableAfterDeparture:  boolean;
  refundBeforeDeparture?:    TotalClass;
  refundAfterDeparture?:     TotalClass;
}

export interface Seat {
  count: number;
  type:  AirlineAlliance;
}

export interface ServicesStatuses {
  baggage:  AirlineAlliance;
  exchange: AirlineAlliance;
  refund:   AirlineAlliance;
}
