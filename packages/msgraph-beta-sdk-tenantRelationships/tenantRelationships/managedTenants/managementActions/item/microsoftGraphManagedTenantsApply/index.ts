/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createManagementActionDeploymentStatusFromDiscriminatorValue, serializeManagementActionDeploymentStatus, type ManagementActionDeploymentStatus } from '@microsoft/msgraph-beta-sdk/models/managedTenants/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface ApplyPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The excludeGroups property
     */
    excludeGroups?: string[] | null;
    /**
     * The includeAllUsers property
     */
    includeAllUsers?: boolean | null;
    /**
     * The includeGroups property
     */
    includeGroups?: string[] | null;
    /**
     * The managementTemplateId property
     */
    managementTemplateId?: string | null;
    /**
     * The tenantGroupId property
     */
    tenantGroupId?: string | null;
    /**
     * The tenantId property
     */
    tenantId?: string | null;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ApplyPostRequestBody}
 */
// @ts-ignore
export function createApplyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoApplyPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param ApplyPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoApplyPostRequestBody(applyPostRequestBody: Partial<ApplyPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { applyPostRequestBody.backingStoreEnabled = true; },
        "excludeGroups": n => { applyPostRequestBody.excludeGroups = n.getCollectionOfPrimitiveValues<string>(); },
        "includeAllUsers": n => { applyPostRequestBody.includeAllUsers = n.getBooleanValue(); },
        "includeGroups": n => { applyPostRequestBody.includeGroups = n.getCollectionOfPrimitiveValues<string>(); },
        "managementTemplateId": n => { applyPostRequestBody.managementTemplateId = n.getStringValue(); },
        "tenantGroupId": n => { applyPostRequestBody.tenantGroupId = n.getStringValue(); },
        "tenantId": n => { applyPostRequestBody.tenantId = n.getStringValue(); },
    }
}
/**
 * Provides operations to call the apply method.
 */
export interface MicrosoftGraphManagedTenantsApplyRequestBuilder extends BaseRequestBuilder<MicrosoftGraphManagedTenantsApplyRequestBuilder> {
    /**
     * Applies a management action against a specific managed tenant. Performing this operation makes the appropriate configurations and creates the appropriate policies. For example, when applying the required multifactor authentication for admins, management action creates a Microsoft Entra Conditional Access policy that requires multifactor authentication for all users that are assigned an administrative directory role.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagementActionDeploymentStatus>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/managedtenants-managementaction-apply?view=graph-rest-beta|Find more info here}
     */
     post(body: ApplyPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagementActionDeploymentStatus | undefined>;
    /**
     * Applies a management action against a specific managed tenant. Performing this operation makes the appropriate configurations and creates the appropriate policies. For example, when applying the required multifactor authentication for admins, management action creates a Microsoft Entra Conditional Access policy that requires multifactor authentication for all users that are assigned an administrative directory role.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ApplyPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param ApplyPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeApplyPostRequestBody(writer: SerializationWriter, applyPostRequestBody: Partial<ApplyPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!applyPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeCollectionOfPrimitiveValues<string>("excludeGroups", applyPostRequestBody.excludeGroups);
    writer.writeBooleanValue("includeAllUsers", applyPostRequestBody.includeAllUsers);
    writer.writeCollectionOfPrimitiveValues<string>("includeGroups", applyPostRequestBody.includeGroups);
    writer.writeStringValue("managementTemplateId", applyPostRequestBody.managementTemplateId);
    writer.writeStringValue("tenantGroupId", applyPostRequestBody.tenantGroupId);
    writer.writeStringValue("tenantId", applyPostRequestBody.tenantId);
    writer.writeAdditionalData(applyPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const MicrosoftGraphManagedTenantsApplyRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants/managementActions/{managementAction%2Did}/microsoft.graph.managedTenants.apply";
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftGraphManagedTenantsApplyRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: MicrosoftGraphManagedTenantsApplyRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagementActionDeploymentStatusFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeApplyPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
