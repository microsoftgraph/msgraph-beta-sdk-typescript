/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPrivilegedRoleAssignmentFromDiscriminatorValue, type PrivilegedRoleAssignment } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the selfDeactivate method.
 */
export interface SelfDeactivateRequestBuilder extends BaseRequestBuilder<SelfDeactivateRequestBuilder> {
    /**
     * Invoke action selfDeactivate
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrivilegedRoleAssignment
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PrivilegedRoleAssignment | undefined>;
    /**
     * Invoke action selfDeactivate
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const SelfDeactivateRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPrivilegedRoleAssignmentFromDiscriminatorValue,
    },
};
/**
 * Uri template for the request builder.
 */
export const SelfDeactivateRequestBuilderUriTemplate = "{+baseurl}/privilegedApproval/{privilegedApproval%2Did}/roleInfo/selfDeactivate";
/* tslint:enable */
/* eslint-enable */