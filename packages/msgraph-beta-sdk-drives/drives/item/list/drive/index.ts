/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDriveFromDiscriminatorValue, type Drive } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the drive property of the microsoft.graph.list entity.
 */
export interface DriveRequestBuilder extends BaseRequestBuilder<DriveRequestBuilder> {
    /**
     * Allows access to the list as a drive resource with driveItems. Only present on document libraries.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Drive
     */
     get(requestConfiguration?: RequestConfiguration<DriveRequestBuilderGetQueryParameters> | undefined) : Promise<Drive | undefined>;
    /**
     * Allows access to the list as a drive resource with driveItems. Only present on document libraries.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DriveRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Allows access to the list as a drive resource with driveItems. Only present on document libraries.
 */
export interface DriveRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DriveRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DriveRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDriveFromDiscriminatorValue,
        queryParametersMapper: DriveRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const DriveRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/list/drive{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */