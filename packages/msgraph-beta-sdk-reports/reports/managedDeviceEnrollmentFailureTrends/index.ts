/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createReportFromDiscriminatorValue, type Report } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the managedDeviceEnrollmentFailureTrends method.
 */
export interface ManagedDeviceEnrollmentFailureTrendsRequestBuilder extends BaseRequestBuilder<ManagedDeviceEnrollmentFailureTrendsRequestBuilder> {
    /**
     * Metadata for the enrollment failure trends report
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Report
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Report | undefined>;
    /**
     * Metadata for the enrollment failure trends report
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagedDeviceEnrollmentFailureTrendsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createReportFromDiscriminatorValue,
    },
};
/**
 * Uri template for the request builder.
 */
export const ManagedDeviceEnrollmentFailureTrendsRequestBuilderUriTemplate = "{+baseurl}/reports/managedDeviceEnrollmentFailureTrends()";
/* tslint:enable */
/* eslint-enable */