import DataService from './data-service';
import StorageService from './storage-service';

const VehicleService = new DataService('vehicles')
const VehicleDraftService = new DataService('vehicle_drafts')

const RegistrationService = new StorageService('registrations')
const InspectionService = new StorageService('inspections')


export {
  VehicleService,
  VehicleDraftService,
  RegistrationService,
  InspectionService,
}
