/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDriveProtectionUnitFromDiscriminatorValue, serializeDriveProtectionUnit, type DriveProtectionUnit } from '@microsoft/msgraph-beta-sdk/models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the driveProtectionUnits property of the microsoft.graph.backupRestoreRoot entity.
 */
export interface DriveProtectionUnitItemRequestBuilder extends BaseRequestBuilder<DriveProtectionUnitItemRequestBuilder> {
    /**
     * Delete navigation property driveProtectionUnits for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The list of drive protection units in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DriveProtectionUnit>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DriveProtectionUnitItemRequestBuilderGetQueryParameters> | undefined) : Promise<DriveProtectionUnit | undefined>;
    /**
     * Update the navigation property driveProtectionUnits in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DriveProtectionUnit>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: DriveProtectionUnit, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DriveProtectionUnit | undefined>;
    /**
     * Delete navigation property driveProtectionUnits for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The list of drive protection units in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DriveProtectionUnitItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property driveProtectionUnits in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: DriveProtectionUnit, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of drive protection units in the tenant.
 */
export interface DriveProtectionUnitItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const DriveProtectionUnitItemRequestBuilderUriTemplate = "{+baseurl}/solutions/backupRestore/driveProtectionUnits/{driveProtectionUnit%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DriveProtectionUnitItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DriveProtectionUnitItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: DriveProtectionUnitItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: DriveProtectionUnitItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDriveProtectionUnitFromDiscriminatorValue,
        queryParametersMapper: DriveProtectionUnitItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: DriveProtectionUnitItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDriveProtectionUnitFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDriveProtectionUnit,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */