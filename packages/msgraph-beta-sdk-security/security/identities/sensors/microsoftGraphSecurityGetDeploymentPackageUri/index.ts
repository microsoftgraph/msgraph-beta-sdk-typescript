/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
// @ts-ignore
import { createSensorDeploymentPackageFromDiscriminatorValue, type SensorDeploymentPackage } from '@microsoft/msgraph-beta-sdk/models/security/';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getDeploymentPackageUri method.
 */
export interface MicrosoftGraphSecurityGetDeploymentPackageUriRequestBuilder extends BaseRequestBuilder<MicrosoftGraphSecurityGetDeploymentPackageUriRequestBuilder> {
    /**
     * Invoke function getDeploymentPackageUri
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SensorDeploymentPackage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SensorDeploymentPackage | undefined>;
    /**
     * Invoke function getDeploymentPackageUri
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const MicrosoftGraphSecurityGetDeploymentPackageUriRequestBuilderUriTemplate = "{+baseurl}/security/identities/sensors/microsoft.graph.security.getDeploymentPackageUri()";
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftGraphSecurityGetDeploymentPackageUriRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: MicrosoftGraphSecurityGetDeploymentPackageUriRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSensorDeploymentPackageFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */