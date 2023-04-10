import DataService from './data-service';

const VehicleService = new DataService('vehicles')
const VehicleDraftService = new DataService('vehicle_drafts')

export {
  VehicleService,
  VehicleDraftService
}