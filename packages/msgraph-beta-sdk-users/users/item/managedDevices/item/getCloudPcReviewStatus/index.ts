/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCloudPcReviewStatusFromDiscriminatorValue, type CloudPcReviewStatus } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getCloudPcReviewStatus method.
 */
export interface GetCloudPcReviewStatusRequestBuilder extends BaseRequestBuilder<GetCloudPcReviewStatusRequestBuilder> {
    /**
     * Get the review status of a specific Cloud PC device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudPcReviewStatus>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     * @see {@link https://learn.microsoft.com/graph/api/manageddevice-getcloudpcreviewstatus?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CloudPcReviewStatus | undefined>;
    /**
     * Get the review status of a specific Cloud PC device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const GetCloudPcReviewStatusRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/managedDevices/{managedDevice%2Did}/getCloudPcReviewStatus()";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetCloudPcReviewStatusRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GetCloudPcReviewStatusRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudPcReviewStatusFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
