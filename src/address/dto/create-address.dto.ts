export class CreateAddressDto {
  // 'region_id': number;
  // 'district_id': number;
  'area_id': string;
  // 'neighborhood_id': number;
  // 'street_id': number;
  'house_number': number;
  'apartment_id': number;
  'location': string;
  'landmark': string;
  // 'metro_id': number;
  'location_description': string;
  // 'building_condition_id': number;
  // 'building_seria_id': number;
  'building_year': number;
  // 'wall_material_id': number;
  // 'overlaps_id': number;
  // 'water_supply_id': number;
  // 'heating_system_id': number;
  'is_gas': boolean;
  'is_electric': boolean;
  'passeger_elevators_count': number;
  'freight_elevators_count': number;
  'is_building_security': boolean;
  // 'parking_id': number;
  'is_demolition_planned': boolean;
}
