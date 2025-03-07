/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCloudCertificationAuthorityFromDiscriminatorValue, type CloudCertificationAuthority } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the patchCloudCertificationAuthority method.
 */
export interface PatchCloudCertificationAuthorityRequestBuilder extends BaseRequestBuilder<PatchCloudCertificationAuthorityRequestBuilder> {
    /**
     * Invoke action patchCloudCertificationAuthority
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudCertificationAuthority>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CloudCertificationAuthority | undefined>;
    /**
     * Invoke action patchCloudCertificationAuthority
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const PatchCloudCertificationAuthorityRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/cloudCertificationAuthority/{cloudCertificationAuthority%2Did}/patchCloudCertificationAuthority";
/**
 * Metadata for all the requests in the request builder.
 */
export const PatchCloudCertificationAuthorityRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: PatchCloudCertificationAuthorityRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudCertificationAuthorityFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
