export interface OWAItem {
  id: string;
  description: string;
}

export interface Facility {
  [key: string]: any;
  id: string | number;
  stateCod: string;
  hospitalName: string;
  city: string;
  state?: string;
  reportName?: string;
  addressNo1?: string;
  addressNo2?: string;
  npi?: string;
  otherID?: string;
}

export interface State {
  id: string;
  name: string;
  value: string;
}

export interface HeaderItem {
  id: string;
  name: string;
}

// modal
export interface FacilityInput {
  id: string | number;
  label: string;
  name: string;
  type: string;
  cols: number;
}

export interface Doctor {
  id: string | number;
  lastName: string;
  firstName: string;
  npi: string;
  licenseNumber: string;
  specialty: string;
  addressCityState: string;
}

export interface DoctorInput extends FacilityInput {
  id: string | number;
  label: string;
  name: keyof Doctor;
  type: string;
  cols: number;
}

export interface DoctorHeader {
  id: string;
  name: string
}

export interface AgentHeader {
  id: string;
  name: string
}

export interface Agent {
  code: string;
  description: string
}
