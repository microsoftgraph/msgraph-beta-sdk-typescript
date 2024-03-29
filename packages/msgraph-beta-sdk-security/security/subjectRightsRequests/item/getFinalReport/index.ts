/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getFinalReport method.
 */
export interface GetFinalReportRequestBuilder extends BaseRequestBuilder<GetFinalReportRequestBuilder> {
    /**
     * Invoke function getFinalReport
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke function getFinalReport
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const GetFinalReportRequestBuilderUriTemplate = "{+baseurl}/security/subjectRightsRequests/{subjectRightsRequest%2Did}/getFinalReport()";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetFinalReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GetFinalReportRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
    },
};
/* tslint:enable */
/* eslint-enable */
