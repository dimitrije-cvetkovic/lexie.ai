import { IAddPatientResponse, IDeletePatientResponse, IPatientsResponse } from "@/types/apis";
import { IPatient } from "@/types/domain";
import { IPatientModal } from "@/types/views";

const baseURL = process.env.REACT_APP_BASE_URL;

export class PatientsApi {
  async getPatients(token: string): Promise<IPatientsResponse> {
    const response = await fetch(`${baseURL}/patients`, {
      headers: { 'Authorization': 'Bearer ' + token}
    });

    return await response.json();
  }

  async addPatient(token: string, patient: IPatientModal): Promise<IAddPatientResponse> {
    const response = await fetch(`${baseURL}/patients`, {
      method: "POST",
      headers: { 'Authorization': 'Bearer ' + token},
      body: JSON.stringify(patient)
    });
    return await response.json();
  }

  async updatePatient(token: string, patient: IPatient) {
    const response = await fetch(`${baseURL}/patients`, {
      method: "PUT",
      headers: { 'Authorization': 'Bearer ' + token},
      body: JSON.stringify(patient)
    });
    return await response.json();
  }

  async deletePatient(token: string, patientId: string): Promise<IDeletePatientResponse> {
    const response = await fetch(`${baseURL}/patients/${patientId}`, {
      headers: { 'Authorization': 'Bearer ' + token}
    });
    return await response.json();
  }
}

const patientApi = new PatientsApi();

export default patientApi;
