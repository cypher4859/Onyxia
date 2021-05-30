/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getICaseFileInfoModel = /* GraphQL */ `
  query GetICaseFileInfoModel($id: ID!) {
    getICaseFileInfoModel(id: $id) {
      _deleted
      _user
      id
      obsId
      fullName
      first
      middle
      last
      suffix
      additional
      month
      day
      year
      date
      age
      socialSecurityNumber
      driversLicenseNumber
      passportIdentifier
      phones
      emails
      messagingApplications
      height
      weight
      eyeColor
      hairColor
      tattoos
      piercings
      physicalDeformities
      profile
      streetAddress
      city
      zip
      state
      country
      personalReferences
      businessReferences
      romanticReferences
      familialReferences
      outlierAssociates
      createdAt
      updatedAt
    }
  }
`;
export const listICaseFileInfoModels = /* GraphQL */ `
  query ListICaseFileInfoModels(
    $filter: ModelICaseFileInfoModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listICaseFileInfoModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        _deleted
        _user
        id
        obsId
        fullName
        first
        middle
        last
        suffix
        additional
        month
        day
        year
        date
        age
        socialSecurityNumber
        driversLicenseNumber
        passportIdentifier
        phones
        emails
        messagingApplications
        height
        weight
        eyeColor
        hairColor
        tattoos
        piercings
        physicalDeformities
        profile
        streetAddress
        city
        zip
        state
        country
        personalReferences
        businessReferences
        romanticReferences
        familialReferences
        outlierAssociates
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
